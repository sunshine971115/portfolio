import React from 'react';
import './WhyHireMe.css';
import scholar from '../assets/images/scholarship.png';
import project from '../assets/images/project.png';
import codechef from '../assets/images/codechef.png';
import leetcode from '../assets/images/leetcode.png';
import { motion } from 'framer-motion';

const WhyHireMe = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 40
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: 0.2,
                duration: 0.5
            }}
            viewport={{
                once: true
            }}
        >
            <h2 className='heading1'>Why Hire Me?</h2>
            <div className="neww">
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={scholar} alt="" className='why_logo' />
                            <h4 className='mid_text'>2019</h4>
                            <p className='main_text_why'>NTSE Scholar</p>
                        </div>
                        <div className="box">
                            <img src={project} alt="" className='why_logo' />
                            <h4 className='mid_text'>6+</h4>
                            <p className='main_text_why'>Completed Projects</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 120
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5
                    }}
                    viewport={{
                        once: true
                    }}
                    className='modiv'>
                    <div className="flex2">
                        <div className="box">
                            <img src={codechef} alt="" className='why_logo' />
                            <h4 className='mid_text'>4★</h4>
                            <p className='main_text_why'>Codechef Rating</p>
                        </div>
                        <div className="box ">
                            <img src={leetcode} alt="" className='why_logo' />
                            <h4 className='mid_text'>150</h4>
                            <p className='main_text_why'>LeetCode Problems Solved</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default WhyHireMe;
