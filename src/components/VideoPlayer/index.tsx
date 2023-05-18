
export default function VideoPlayer( props: {src : string})  {
    return (
      <video controls={true} style={{ "width": '100%', "height": '100%', "minHeight": "50%"}}>
        <source src={props.src} />
      </video>

    )
}