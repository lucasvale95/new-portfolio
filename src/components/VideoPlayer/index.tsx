
export default function VideoPlayer( props: {src : string})  {

    return (
      <video autoPlay loop controls={true} style={{ width: '100%', height: '100%' }}>
        <source src={props.src} />
      </video>

    )
}