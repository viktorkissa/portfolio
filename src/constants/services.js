import React from "react"
import { FaRegLightbulb } from "react-icons/fa"
import { GiSpeedometer } from "react-icons/gi"
import { MdDevices } from "react-icons/md"
import { IoIosRocket } from "react-icons/io"
import { GrCode } from "react-icons/gr"

export default [
  {
    id: 1,
    icon: <GiSpeedometer className="service-icon" />,
    title: "Fast",
    text: `Fast load times and lag free interaction.`,
  },
  {
    id: 2,
    icon: <MdDevices className="service-icon" />,
    title: "Responsive",
    text: `My layouts will work on any device, big or small.`,
  },
  {
    id: 3,
    icon: <FaRegLightbulb className="service-icon" />,
    title: "Intuitive",
    text: `Strong preference for easy to use, intuitive UX/UI.`,
  },
  {
    id: 4,
    icon: <IoIosRocket className="service-icon" />,
    title: "Dynamic",
    text: `Websites don't have to be static, I love making pages come to life.`,
  },
  {
    id: 5,
    icon: <GrCode className="service-icon" />,
    title: "Newest technologies",
    text: `I always strive for self-development and improve my skills in web development by studying new technologies.`,
  },
]
