import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Chakra = () => {
    const [level, setLevel] = useState(0);
    const chakraLevels = [{
        level: 1,
        title: "Reiki one-on-one session",
        content: "A personalized session where a Reiki Channel works with one Recipent at a time, using a series of Meditative Points to channel Reiki energy to the Recipent. The session typically lasts around 60 to 90 minutes and can be done on a table or in a chair. The goal of the session is to promote balance and healing in all Prospects of Your Life, and You experience sensations such as warmth or tingling during the session. Overall, a Reiki one-on-one session can be a relaxing and rejuvenating experience, and can be beneficial for physical, emotional, or spiritual healing.",
    },
    {
        level: 2,
        title: "Chakra Balancing Session",
        content: " This type of Reiki session focuses on balancing and clearing the body's chakras (energy centers), to promote overall health and well-being.",
    },
    {
        level: 3,
        title: "Emotional Healing Session",
        content: " In an emotional healing session, the practitioner uses Reiki energy to help the Recipents release negative emotions and traumas, and promote emotional healing.",
    },
    {
        level: 4,
        title: "Personal Life / Love Life Healing",
        content: "Reiki can help heal past traumas, release negative emotions, and promote self-love and acceptance, which can lead to a more fulfilling personal and love life. It can also enhance communication and deepen connections with loved ones.",
    },
    {
        level: 5,
        title: "Crystal Reiki Session",
        content: "In a crystal Reiki session, the practitioner uses crystals in addition to Reiki energy, to promote balance and healing.",
    },
    {
        level: 6,
        title: "Sound Healing Reiki Session",
        content: " This type of Reiki session incorporates sound healing techniques, such as singing bowls or tuning forks, to enhance the healing effects of Reiki.",
    },
    {
        level: 7,
        title: " Reiki for Manifestation Session",
        content: "This type of Reiki session focuses on using Reiki energy to manifest desired outcomes, such as abundance or love.",
    }, {
        level: 8,
        title: "Reiki for Spiritual Growth Session",
        content: "In a Reiki for spiritual growth session, the practitioner uses Reiki energy to promote spiritual growth, awareness, and connection to the divine.",
    },
    {
        level: 9,
        title: "Intuitive Reiki Session",
        content: "An intuitive Reiki session involves the practitioner using their intuition to guide the session, based on the Recipents needs and energy.",

    },
    {
        level: 10,
        title: " Animal Reiki Session",
        content: "This type of Reiki session is used to provide healing and relaxation to animals from any illness, desease or Imbalances, and can be done in person or remotely.",
    },
    {
        level: 11,
        title: "Distance Reiki Session",
        content: "This type of Reiki session is done remotely, where the practitioner channels Reiki energy to the Recipents, who may be in another location.",
    },
    {
        level: 12,
        title: "Group Reiki Session",
        content: "In a group Reiki session, several Recipents receive Reiki simultaneously, either in the same room or remotely. Anannt Oorja Safar Organize Group Reiki Sessions.",
    }]
    return (
        <div className='flex md:mt-[70px] w-full items-center'>
            <div className='flex flex-col w-[80%]'>
                <h3 className='text-4xl font-semibold'>Level {chakraLevels[level].level}</h3>
                <h3 className='text-4xl font-semibold'> {chakraLevels[level].title}</h3>
                <div className='flex gap-3 mt-[32px] items-center'>
                    <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" onClick={() => setLevel(l => (l - 1) % chakraLevels.length)}><FaArrowLeft size={15} /></button>
                    {level + 1}/{chakraLevels.length}
                    <button className="p-4 bg-[#8777D7] w-max rounded-lg text-white font-bold" onClick={() => setLevel(l => (l + 1) % chakraLevels.length)}><FaArrowRight size={15} /></button>
                </div>
            </div>
            <p className='bg-[#A497C821] text-xl leading-10 p-10'>
                {chakraLevels[level].content}</p>
        </div>
    )
}

export default Chakra
