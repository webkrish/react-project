import asset25 from "./assets/asset 25.webp";

export function Map(){
    return(
        <div className="map-sec">
            <div className="wrapper">
            <div className="heading">
                    <h4><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 12.3667V0.633333H5.04208V3.31777L12.6324 3.31777C10.1412 8.05664 4.87557 10.4868 0 9.13789V11.9022C4.98875 12.9881 10.081 11.0061 13.3228 7.08601L13.3228 12.3667L16 12.3667Z" fill="#FF0054" />
                    </svg>BEMARKETING
                    </h4>
                    <h1>I will help you increase <br />
                        your reach by</h1>
                </div>
                <img src={asset25} alt="" />
            </div>
        </div>
    )
}