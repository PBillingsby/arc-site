import React from "react";

import { Paginator } from "@/components/molecules/Paginator";

import * as util from "@/util";
import * as S from "./styles";
import { IProps } from "./types";
import { KeyValueType } from "@/types";
import { useARProvder } from "@/providers/ARProvider";

export default function Table(props: IProps) {
    const scrollRef = React.useRef(null);
    const arProvider = useARProvder();

    const [currentPage, setCurrentPage] = React.useState(1);
    const [recordsPerPage] = React.useState(props.recordsPerPage);

    const lastRecordIndex = currentPage * recordsPerPage;
    const firstRecordIndex = lastRecordIndex - recordsPerPage;
    const currentRecords = props.data.slice(firstRecordIndex, lastRecordIndex);
    const nPages = Math.ceil(props.data.length / recordsPerPage);

    return (
        <S.Wrapper ref={scrollRef}>
            <S.Header>
                <S.HeaderFlex>
                    <S.H2>{props.title}</S.H2>
                </S.HeaderFlex>
            </S.Header>
            <S.Body>
                <S.Table>
                    <S.TableHeader>
                        {Object.keys(props.header).map((element: string, index: number) => {
                            return (
                                <S.THeader key={index} even={(index + 1) % 2 === 0} width={props.header[element]!.width} align={props.header[element]!.align}>
                                    <p>{util.formatTitle(element)}</p>
                                </S.THeader>
                            )
                        })}
                    </S.TableHeader>
                    {currentRecords.map((element: KeyValueType, index: number) => {
                        return (
                            <S.Row key={index} even={index % 2 === 0}>
                                {Object.keys(element).map((row: string, rowIndex: number) => {
                                    const rowData = typeof element[row] === "object" ? <div>{element[row]}</div> : <p>{element[row]}</p>
                                    return (
                                        <S.TData
                                            key={rowIndex}
                                            even={(rowIndex + 1) % 2 === 0}
                                            width={props.header[row]!.width}
                                        >
                                            {rowData}
                                        </S.TData>
                                    )
                                })}
                            </S.Row>
                        )
                    })}
                </S.Table>
                <Paginator
                    scrollRef={scrollRef}
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </S.Body>
        </S.Wrapper>
    )
}