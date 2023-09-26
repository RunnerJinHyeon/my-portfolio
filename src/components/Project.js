const Project = () => {
    return (
        <>
        <div className="flex justify-center w-full h-screen items-center">
            <div className="w-[1920px] h-[1080px] ">
            <iframe className="rounded-xl" src="http://musicforecast.s3-website.ap-northeast-2.amazonaws.com/" width="1920px" height="1080px"  style={{
            overflow: "hidden",
            transform: "scale(0.6)", 
        }}></iframe>
            </div>
        

        </div>
  </>
    )
}

export default Project;