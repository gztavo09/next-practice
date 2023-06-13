type Props = {
    children: JSX.Element | JSX.Element[]
}

export const DarkLayout = ({ children }: Props) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, .3)',
            padding: '10px'
        }}>
            <h3>Dark</h3>
            { children }
        </div>
    )
}
