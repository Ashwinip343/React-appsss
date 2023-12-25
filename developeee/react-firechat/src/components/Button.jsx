

// eslint-disable-next-line react/prop-types
export const Buttons = ({onClick=null ,children=null}) => (
    <div>
        <button onClick={onClick}  className="shadow-md shadow-cyan-500/50 bg-cyan-500 text-black font-bold p-2 px-8 rounded-full">{children} </button>
    </div>
)
