import AM from "../styles/AboutMe.module.css";
import MeIcon from "../icons/aboutme.png";
import ContactData from "./ContactData";
import Navigation from "./Navigation";
export const AboutMe = () => {
    return (
        <div className={AM.mainWindow}>
            <img src={MeIcon} alt="callMeIcon" />
            <h1 className={AM.h1}>About Me</h1>
            <div className={AM.content}>
                <div className={AM.aboutme}>
                    <p className={AM.p}>
                        Hi, my name is Łukasz. I am very glad that you visited
                        my website, so it will introduce you to my person a bit.
                    </p>
                    <p className={AM.p}>
                        Privately, I am primarily a supporter of a healthy,
                        conscious lifestyle. It used to be football, today
                        amateur tennis, running or MTB cycling. Sport gives me
                        energy and, above all, health. I also like traveling,
                        nothing fills me with energy like sunny Spain! Moreover,
                        I like biography and development books.
                    </p>
                    <p className={AM.p}>
                        Professionally, I finished 5 years of accounting and
                        finance studies at the University of Gdańsk. In the
                        third year after the internship, I started working in a
                        bank, where I worked for 7 years. I was primarily
                        responsible for relations with affluent clients, with
                        whom I worked for about 4 years, mainly focusing on the
                        investment department.
                    </p>
                    <p className={AM.p}>
                        I am a person who still wants to learn new things and,
                        unfortunately, in the bank I got to the stage where it
                        was no longer possible in the way I expected.
                        Statistically, I have only finished a quarter of my
                        life, so I decided that I would like to do what I really
                        want.
                    </p>
                    <p className={AM.p}>
                        Ten months ago I decided to start completely from
                        scratch and definitely programming is what I want to do!
                        I believe that it is work without limits, continuous
                        learning and access to the whole world. You're judged on
                        your skill level, and that's great.
                    </p>
                    <p className={AM.p}>
                        In August 2021 I finished a 3-month daily front-end
                        developer bootcamp. Since then, I have been learning new
                        things every day. I am currently programming in React
                        and this is the library in which I want to develop. The
                        next stage in my development has come and I would like
                        to start gaining professional experience. I would be
                        very pleased if you give me a chance to talk. Because I
                        know that I am a man who will engage in 100%.
                    </p>
                </div>

                <ContactData />
            </div>

            <Navigation />
        </div>
    );
};
