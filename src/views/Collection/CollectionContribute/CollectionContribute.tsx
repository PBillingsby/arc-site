import React from "react"
import { ReactSVG } from "react-svg";

import { useARProvder } from "@/providers/ARProvider";
import { ContributionResultType } from "@/types";

import { Button } from "@/components/atoms/Button";
import { FormField } from "@/components/atoms/FormField";
import { Modal } from "@/components/molecules/Modal";
import { Notification } from "@/components/atoms/Notification";

import { ValidationType } from "@/types";
import { ASSETS } from "@/config";
import { LANGUAGE } from "@/language";
import { IProps } from "./types";
import * as S from "./styles";

export default function CollectionContribute(props: IProps) {
    const arProvider = useARProvder();

    const [showModal, setShowModal] = React.useState(false);
    const [amount, setAmount] = React.useState<number>(0);
    const [loading, setLoading] = React.useState<boolean>(false);

    const [contributionResult, setContributionResult] = React.useState<ContributionResultType | null>(null);

    async function handlePoolContribute(e: any) {
        e.preventDefault();
        setLoading(true);
        setContributionResult(await arProvider.handlePoolContribute(props.poolId, amount));
        setLoading(false);
    }

    function getAvailableBalance() {
        if (!arProvider.walletAddress) {
            return (
                <p>{LANGUAGE.walletNotConnected}</p>
            )
        }
        else {
            if (arProvider.availableBalance) {
                return (
                    <>
                        <S.AvailableBalance>{LANGUAGE.availableBalance}:&nbsp;</S.AvailableBalance>
                        <S.BalanceAmount>{arProvider.availableBalance.toFixed(3)}&nbsp;</S.BalanceAmount>
                        <S.ARTokens>{LANGUAGE.arTokens}</S.ARTokens>
                    </>
                )
            }
            else {
                if (arProvider.availableBalance === 0) {
                    return (
                        <>
                            <S.AvailableBalance>{LANGUAGE.availableBalance}:&nbsp;</S.AvailableBalance>
                            <S.BalanceAmount>{0}&nbsp;</S.BalanceAmount>
                            <S.ARTokens>{LANGUAGE.arTokens}</S.ARTokens>
                        </>
                    )
                }
                return (
                    <p>{LANGUAGE.fetchingBalance}&nbsp;...</p>
                )
            }
        }
    }

    function getInvalidForm(): ValidationType {
        if (!arProvider.availableBalance) {
            return { status: false, message: null };
        }
        else {
            if (amount > arProvider.availableBalance) {
                return { status: true, message: LANGUAGE.amountExceedsBalance };
            }
            return { status: false, message: null };
        }
    }

    function getDisabledSubmit() {
        return getInvalidForm().status || loading || !arProvider.walletAddress || isNaN(amount) || amount <= 0;
    }

    return (
        <>
            {contributionResult &&
                <Notification
                    type={contributionResult.status === true ? "success" : "warning"}
                    message={contributionResult.message!}
                    callback={() => setContributionResult(null)}
                />
            }
            {showModal &&
                <Modal
                    title={LANGUAGE.contributeTo}
                    handleClose={() => setShowModal(false)}
                >
                    <S.ModalWrapper>
                        <S.Header>
                            <S.HeaderFlex>
                                <S.Header1>{props.header}</S.Header1>
                            </S.HeaderFlex>
                            {props.subheader}
                            <S.BalanceWrapper>
                                {getAvailableBalance()}
                            </S.BalanceWrapper>
                        </S.Header>
                        <S.Form onSubmit={(e) => handlePoolContribute(e)}>
                            <S.FormField>
                                <FormField
                                    type={"number"}
                                    value={amount}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))}
                                    disabled={loading || !arProvider.walletAddress}
                                    invalid={getInvalidForm()}
                                    endText={LANGUAGE.arTokens}
                                />
                            </S.FormField>
                            <S.SubmitWrapper>
                                <Button
                                    label={LANGUAGE.submit}
                                    type={"secondary"}
                                    handlePress={(e) => handlePoolContribute(e)}
                                    disabled={getDisabledSubmit()}
                                    loading={loading}
                                    formSubmit
                                />
                                {/* <S.SignMessage>
                                    <p>{LANGUAGE.walletSignMessage}</p>
                                </S.SignMessage> */}
                            </S.SubmitWrapper>
                        </S.Form>
                    </S.ModalWrapper>
                </Modal>
            }
            <S.Wrapper
                onClick={() => setShowModal(true)}
            >
                <S.Label>
                    <ReactSVG src={ASSETS.logoAltActive} />
                    <span>{LANGUAGE.contribute}</span>
                </S.Label>
            </S.Wrapper>
        </>
    )
}