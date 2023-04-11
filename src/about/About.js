import AboutImage from "../assets/about.jpg";
import Card from "../components/Card";
import data from "./data";
import {HiDownload} from "react-icons/hi";
import "./about.css";


const About =() =>{


    return(
        <>
        <section id="about">
            <div className="container about_container">
                <div className="about_left">
                    <div className="about_portrait">
                        <img src={AboutImage} alt="About Image"/>
                    </div>
                </div>
                <div className="about_right">
                    <h2 style={{textAlign:'center'}}>About Me</h2>
                    <div className="about_cards">
                        {
                            data.map(item =>{
                                return(
                                    <>
                                    <Card key={item.id} className="about_card" >
                                        <span className="about_cardicon">
                                            {item.icon}
                                        </span>
                                        <h5>{item.title}</h5>
                                        <small>{item.desc}</small>

                                    </Card>
                                    </>
                                )
                            })
                        }
                    </div>
                    <p>
                        Quo unde ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed nisi lacus sed viverra tellus in hac habitasse. Enim praesent elementum facilisis leo vel fringilla. Consequat interdum varius sit amet mattis vulputate enim. Bibendum arcu vitae elementum curabitur vitae nunc sed. Pellentesque habitant morbi tristique senectus et netus. Vestibulum morbi blandit cursus risus at ultrices. Arcu ac tortor dignissim convallis aenean et tortor at. Fringilla est ullamcorper eget nulla facilisi. Sed ullamcorper morbi tincidunt ornare massa eget.

                        In ornare quam viverra orci sagittis eu. Lacus sed viverra tellus in hac habitasse platea dictumst. Vel pretium lectus quam id leo in. Id porta nibh venenatis cras sed felis eget velit aliquet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. In tellus integer feugiat scelerisque varius morbi. Donec massa sapien faucibus et molestie ac feugiat. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Porttitor rhoncus dolor purus non enim. Euismod lacinia at quis risus sed. Purus viverra accumsan in nisl nisi. `,
                        
                        `Proin sed libero enim sed faucibus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Proin libero nunc consequat interdum varius sit amet. Feugiat vivamus at augue eget arcu. Magna fermentum iaculis eu non diam. A condimentum vitae sapien pellentesque habitant. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Maecenas pharetra convallis posuere morbi leo. Quis risus sed vulputate odio ut enim.
                        
                        Adipiscing at in tellus integer feugiat scelerisque varius morbi. Aliquet enim tortor at auctor urna nunc id. Eros in cursus turpis massa. Augue neque gravida in fermentum. Pellentesque pulvinar pellentesque habitant morbi. Senectus et netus et malesuada fames ac turpis egestas. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Varius morbi enim nunc faucibus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Congue quisque egestas diam in. Nibh cras pulvinar mattis nunc sed blandit. Feugiat nibh sed pulvinar proin gravida. Egestas pretium aenean pharetra magna ac. Ut lectus arcu bibendum at varius vel pharetra. Lacinia quis vel eros donec ac odio tempor orci. Molestie nunc non blandit massa enim nec dui nunc. A arcu cursus vitae congue mauris rhoncus aenean vel.
                        
                        Duis ut diam quam nulla porttitor massa id neque. Facilisis sed odio morbi quis commodo odio aenean. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Senectus et netus et malesuada fames ac turpis egestas. Netus et malesuada fames ac. Sit amet dictum sit amet justo donec. Vitae suscipit tellus mauris a diam maecenas. Auctor eu augue ut lectus arcu. Nunc vel risus commodo viverra maecenas accumsan lacus. Lobortis mattis aliquam faucibus purus in massa tempor nec. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Ultrices eros in cursus turpis massa tincidunt dui ut. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Sed risus ultricies tristique nulla aliquet enim tortor at. Pulvinar etiam non quam lacus suspendisse faucibus.
                        
                        Orci sagittis eu volutpa
                    </p>
                    <p>
                        quo undeipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed nisi lacus sed viverra tellus in hac habitasse. Enim praesent elementum facilisis leo vel fringilla. Consequat interdum varius sit amet mattis vulputate enim. Bibendum arcu vitae elementum curabitur vitae nunc sed. Pellentesque habitant morbi tristique senectus et netus. Vestibulum morbi blandit cursus risus at ultrices. Arcu ac tortor dignissim convallis aenean et tortor at. Fringilla est ullamcorper eget nulla facilisi. Sed ullamcorper morbi tincidunt ornare massa eget.

                        In ornare quam viverra orci sagittis eu. Lacus sed viverra tellus in hac habitasse platea dictumst. Vel pretium lectus quam id leo in. Id porta nibh venenatis cras sed felis eget velit aliquet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. In tellus integer feugiat scelerisque varius morbi. Donec massa sapien faucibus et molestie ac feugiat. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Porttitor rhoncus dolor purus non enim. Euismod lacinia at quis risus sed. Purus viverra accumsan in nisl nisi. `,
                        
                        `Proin sed libero enim sed faucibus. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Proin libero nunc consequat interdum varius sit amet. Feugiat vivamus at augue eget arcu. Magna fermentum iaculis eu non diam. A condimentum vitae sapien pellentesque habitant. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Maecenas pharetra convallis posuere morbi leo. Quis risus sed vulputate odio ut enim.
                        
                        Adipiscing at in tellus integer feugiat scelerisque varius morbi. Aliquet enim tortor at auctor urna nunc id. Eros in cursus turpis massa. Augue neque gravida in fermentum. Pellentesque pulvinar pellentesque habitant morbi. Senectus et netus et malesuada fames ac turpis egestas. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Varius morbi enim nunc faucibus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Congue quisque egestas diam in. Nibh cras pulvinar mattis nunc sed blandit. Feugiat nibh sed pulvinar proin gravida. Egestas pretium aenean pharetra magna ac. Ut lectus arcu bibendum at varius vel pharetra. Lacinia quis vel eros donec ac odio tempor orci. Molestie nunc non blandit massa enim nec dui nunc. A arcu cursus vitae congue mauris rhoncus aenean vel.
                        
                        Duis ut diam quam nulla porttitor massa id neque. Facilisis sed odio morbi quis commodo odio aenean. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Senectus et netus et malesuada fames ac turpis egestas. Netus et malesuada fames ac. Sit amet dictum sit amet justo donec. Vitae suscipit tellus mauris a diam maecenas. Auctor eu augue ut lectus arcu. Nunc vel risus commodo viverra maecenas accumsan lacus. Lobortis mattis aliquam faucibus purus in massa tempor nec. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Ultrices eros in cursus turpis massa tincidunt dui ut. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Sed risus ultricies tristique nulla aliquet enim tortor at. Pulvinar etiam non quam lacus suspendisse faucibus.
                        
                        Orci sagittis eu volutpa
                    </p>
                    <div>
                        <a href="#" className="btn primary">Download CV <HiDownload/></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;