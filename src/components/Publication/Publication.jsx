import React from 'react';
import publicationheader from '../../Assets/publicationHeader.png';
import Card from '../../components/Blogs/Card';
import pubinsta from '../../Assets/pubInsta.png';
import pubfac from '../../Assets/pubfac.png';
import pubshare from '../../Assets/pubShare.png';
import pubtwit from '../../Assets/pubTwit.png';
import { AiOutlineLeft } from 'react-icons/ai';

const Publication = () => {
    return (
        <div className='w-full md:mt-[46px] px-[20px] md:px-[0px] mt-[40px]'>
            <div className='flex flex-col'>
                <div className='flex gap-x-11'>
                    <div className='md:flex flex-col justify-between hidden'>
                        <div className='flex flex-col  md:px-[60px]'>
                            <div className='flex flex-col items-center'>
                                <AiOutlineLeft />
                                <a href="/blogs">Back</a>
                            </div>

                        </div>
                        <div className='flex flex-col gap-y-10 '>

                            <div className='flex flex-col items-center gap-y-3'>
                                <p>Follow</p>
                                <div>
                                    <a href="https://facebook.com/reikimasterayush"> <img src={pubfac} alt="facebooklogo" /></a>
                                </div>

                                <p className='text-[#3B5998]'>facebook</p>
                            </div>
                            <div className='flex flex-col items-center gap-y-3'>
                                <div>
                                    <a href="https://twitter.com/reikiayush"> <img src={pubtwit} alt="twitterlogo" /> </a>
                                </div>

                                <p className='text-[#00ACED]'>Twitter</p>
                            </div>

                            <div className='flex flex-col items-center gap-y-3'>
                                <div>
                                    <a href="https://instagram.com/ayushguptareiki"><img src={pubinsta} alt="Instagramlogo" /></a>
                                </div>

                                <p className='text-[#CE3AA0]'>Instagram</p>
                            </div>

                            <div className='flex flex-col items-center gap-y-3'>
                                {/* <div>
                                    <img src={pubshare} alt="facebooklogo" />
                                </div>

                                <p>Share</p> */}
                            </div>

                        </div>
                    </div>
                    <div className='relative'>
                        <img src={publicationheader} alt="publication-img" />
                        <p className='absolute md:bottom-[130px] bottom-[65px] md:text-[40px] text-[20px] text-[white] md:tracking-[0.5px] md:right-[215px] md:left-[30px] left-[10px] md:leading-[50px]'>Tarot Cards Don't Predict Future, It only guides you for Present</p>
                        <p className='absolute md:bottom-[80px] bottom-[25px] md:text-[30px] text-[15px] text-[white] md:left-[30px] md:leading-[40px] left-[10px]'></p>
                        <p className='absolute md:bottom-[40px] bottom-[5px]  text-[white] md:left-[30px] md:leading-[40px] text-[15px] left-[10px]'>by Ayush Gupta</p>
                    </div>

                </div>
                <div>
                    <p className='md:px-[300px] mt-[60px]'>Who wouldn’t love to know what is going to happen in their future? Especially those whose present isn’t going great as well! But whatever you may want to do about it, Tarot Card readings is not going to take you there, says Tarot Card Reader and renowned author, Ayush Gupta.</p>

                    <p className='md:px-[300px] mt-[30px]'>People believe a lot of myths about Tarot Cards. The most popular myth among those is that tarot card readings predict your future events. Ayush says that is not the case at all. He says, “Tarot card reading is not about making future predictions. It would just present suggestions and guidance on how to make your life better in the present ! A lot of people, who swear by Tarot Cards today, wrongly believe that these reading sessions talk about your future.”
                    </p>

                    <p className='md:px-[300px] md:mt-[60px] mt-[30px] md:text-4xl md:leading-[46px] font-semibold tracking-[0.5px] text-2xl'>
                        You may have a great life going but it wouldn’t hurt to peek into the unknown a little bit, right?

                    </p>

                    <p className='md:px-[300px] md:mt-[60px] mt-[30px]'>
                        Well, one of the widely believed myths about tarot card reading is that they predict the future.
                        <br></br>
                        <br></br>
                        However, he adds that the clients aren’t to be blamed for believing thus! Those who read the cards may have led the clients down the wrong path for too long.Tarot card decks were invented in the 1430s in Italy but the standard deck of modern Tarot was reinvented on the basis of the Venetian tarot. It is made up of 78 cards divided into two groups – Major Arcana and Minor Arcana, consisting of 22 and 56 cards, respectively. Today, Tarot Card reading is a popular service offered to interested People everywhere
                    </p>

                    <p className='md:px-[300px] md:mt-[60px] mt-[30px]'>
                        Ayush, who is also a Reiki Healer, says there is no dearth of people asking questions about death, marriage, children, etc, during these sessions. He says that different people hold different notions about Tarot Card readings. This variety of notions is party encouraged by card readers who may or may not predict the future for their clients. But, in reality, Ayush cautions that those readers themselves aren’t aware of what is going to happen in their life two hours later. Therefore, he suggests, don’t believe that one can predict future events through such readings.


                    </p>

                </div>
            </div>
            {/* <h3 className='text-4xl leading-[46px] tracking-[0.5px] mt-[30px] md:px-[300px]'>Eu ridiculus fringilla aenean</h3> */}

            <p className='md:px-[300px] md:mt-[60px] mt-[30px]'>
                Ayush explains, “Tarot card uses the energies around you to analyses and find out ways to make your aura better. Tarot card reading doesn’t predict your future but it definitely helps you find the right path for the present. You must understand that our energies can be transformed and modulated all the time. To achieve that, Tarot Card readers help you with suggestions, tips and overall guidance so that you can bring about those transformations within the given time frame.”
            </p>
            <div className='md:px-[370px] mt-[30px] px-[20px]'>
                {/* <ul className='list-disc'>
                    <li>Crisp fresh iconic elegant timeless clean perfume</li>
                    <li>
                        Neck straight sharp silhouette and dart detail
                    </li>
                    <li>
                        Machine wash cold slim fit premium stretch selvedge denim comfortable low waist
                    </li>
                </ul> */}
                <div className='w-full h-[1px]  bg-[#8777D7] mt-[50px] md:hidden block'>

                </div>
            </div>
            <p className='md:px-[300px] md:mt-[60px] md:block hidden'>
                During a Tarot Card reading session, the reader uses the deck of cards to gain insight into the individual's current state of mind, emotions, and life circumstances. The cards help the reader tap into the individual's energy and provide guidance on how to overcome challenges, improve relationships, and make better life choices. It is essential to understand that the cards are not a magic tool that can predict future events, but they serve as a tool to connect the individual with their inner wisdom and intuition.
                <br>
                </br>
                <br>
                </br>
                He concludes by saying, “Tarot card reading may not tell you all about your future but it definitely tells you how to make your present better. In the end, I believe that that is all that anybody would want, Tarot Card readings are not a means to predict the future, but rather a tool to provide guidance and insight into the present. It is up to the individual to use the guidance provided to make better life choices and shape their future positively. It is a complementary practice that can help individuals gain insight into their lives.
                <div className='w-full h-[1px]  bg-[#8777D7] mt-[50px] md:block hidden'>

                </div>
            </p>



            {/* <h3 className='text-center md:mt-[90px] mt-[45px] md:text-4xl text-2xl md:leading-[46px] tracking-[0.5px]'>You May Also Like</h3>
            <div className='flex flex-wrap justify-between md:mt-[60px] mt-[40px] gap-y-6 px-[20px]'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div> */}

        </div>
    )
}

export default Publication
