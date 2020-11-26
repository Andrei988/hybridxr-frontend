import React from "react";
import { Link } from "react-router-dom";
import classes from "../../assets/css/BackgroundVideo.module.css";
import favicon from "../../assets/img/favicon-tr.png"

const HomePage = (props) => {
  const videoSource = "https://r2---sn-ovgq0oxu-j2ie.googlevideo.com/videoplayback?expire=1606392899&ei=40e_X9DlNZjThgbcjLn4Bg&ip=205.185.214.233&id=o-AD3F4z48toKZUGn0FVOHk_Y8i9xrFRgEjaxZGoa8BSXB&itag=399&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C278%2C394%2C395%2C396%2C397%2C398%2C399&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=TOWdvoVkV90HNn93S4OEX4AF&gir=yes&clen=4088335&dur=25.000&lmt=1581753355343984&fvip=6&keepalive=yes&c=WEB&txp=5431432&n=E3cyf2XMU3oTyM_C560&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAMGGxdyiAzTLCay5V23wk78Mi3IqprOCcaMzSdwQitAtAiEAtWEUDVWqzbxLOqb8Y4JPpHtxuZDuM8XY4iGbU2kNC34%3D&redirect_counter=1&rm=sn-q4fe7y76&req_id=9060ac3a1c16a3ee&cms_redirect=yes&ipbypass=yes&mh=Hy&mip=130.226.139.247&mm=31&mn=sn-ovgq0oxu-j2ie&ms=au&mt=1606381973&mv=m&mvi=2&pcm2cms=yes&pl=16&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pcm2cms,pl&lsig=AG3C_xAwRgIhAKa2DLKjEGRiyhVoNc_bohsjoLTV4JymCdbEjcvNDmjdAiEA8Y-7MeYQ2ZSAAnjwEOPZeTvssGhEkv3hJCD4kImLTF4%3D";
  return (
    <div className={classes.Container}>
      <video controls="controls" autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSource} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div id="hero" className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>
            Welcome to <img id="favicon-tr" src={favicon} alt={favicon}></img>
          </h1>
          <h2>{props.description}</h2>
          <Link to="/services" className="btn-get-started">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
