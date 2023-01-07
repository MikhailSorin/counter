
type ButtonType={
   title:string
    onClick:()=>void
    classname?:string
    desable?: boolean
}

export const Button=(props:ButtonType)=>{
    const onClickHandler=()=>{
        props.onClick()
    }
return(
    <button
        disabled={props.desable}
        className={props.classname}
        onClick={onClickHandler}>{props.title}

    </button>
)

}