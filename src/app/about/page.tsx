import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import african from "../../../src/images/Side Image.png"
import Image from 'next/image';
import service1 from "../../../src/images/Services (1).png"
import service2 from "../../../src/images/Services (2).png"
import service3 from "../../../src/images/Services (3).png"
import service4 from "../../../src/images/Services (4).png"
import user1 from "../../../src/images/Frame 874.png"
import user2 from "../../../src/images/Frame 875.png"
import user3 from "../../../src/images/Frame 876.png"
import Varanty from '@/components/varanty/varanty';



const About = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-[auto]">

                <p className="text-[20px] font-[700]">Home / About</p>

                <div className="flex justify-around">
                    <div className="w-[40%] sm:w-[100%]">
                        <p className="text-[50px] font-[600]">Our Story</p>
                        <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. <br /><br /><br />
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <Image src={african} alt="2 african" />
                </div>


                <div className="flex justify-around p-[20px]">
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <Image src={service1} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded bg-[#DB4444] text-white">
                        <Image src={service2} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <Image src={service3} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                    <div className="border w-[fit-content] p-[15px_20px] text-center mx-auto rounded">
                        <Image src={service4} alt="" className="ml-[30px]" />
                        <h1 className="text-[20px] font-[800]">10.5k </h1>
                        <p>Sallers active our site</p>
                    </div>
                </div>

                <div className="rounded flex justify-around">
                    <div className="rounded">
                        <Image src={user1} alt="" />
                        <p><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                    <div className="rounded">
                        <Image src={user2} alt="" />
                        <p><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                    <div className="rounded">
                        <Image src={user3} alt="" />
                        <p><b>Tom Cruise    </b> <br />
                            Founder & Chairman</p>
                        <div className="flex gap-[10px]">
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <TelegramIcon />
                        </div>
                    </div>
                </div>

                <Varanty />
            </div>

        </>
    )
}

export default About
