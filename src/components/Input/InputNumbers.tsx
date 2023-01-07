import {ChangeEvent} from "react";

type InputPropsType = {
    value: string
    onChange: (value: string) => void
    className?:string
}

export const InputNumbers = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>props.onChange(e.currentTarget.value)

    return (
        <input onChange={onChangeHandler} type="number" value={props.value} className={props.className}/>
    )

}