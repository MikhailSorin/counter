import {ChangeEvent} from "react";

type InputPropsType = {
    value: string
    onChange: (value: string) => void
}

export const InputText = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>props.onChange(e.currentTarget.value)

    return (
        <input onChange={onChangeHandler} value={props.value}/>
    )

}