import {
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa6";
import { MdWork } from "react-icons/md";


import React from 'react'

const Timeline = () => {
    return (
        <section className="timeline-section" >
            <VerticalTimeline lineColor="black" animate="true">
                <VerticalTimelineElement className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={<span style={{ color: 'black' }}>Aug 2023 - present</span>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}
                    
                    >
                    Master's in Computer Science and Engineering <br/>
                    University at Buffalo
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--work"
                    contentStyle={{ background: 'orange', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  orange' }}
                    date={<span style={{ color: 'black' }}>Aug 2021 - Aug 2023</span>}
                    iconStyle={{ background: 'orange', color: '#fff' }}
                    icon={<MdWork />}>
                    Software Engineer at TCS
                    <br/> Clients: Santos, DBS
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={<span style={{ color: 'black' }}>Aug 2021 - Aug 2023</span>}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FaGraduationCap />}>
                    Bachelors of Technology
                    <br/>
                    Sreenidhi Institute of Science and Technology
                
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    )
}

export default Timeline