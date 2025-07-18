import Image from "next/image";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title }) => {
  return (
    <div className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="w-20 mx-auto mb-3 border-2 rounded-full drop-shadow-2xl sm:w-32 md:mb-5 border-rose-500"
      />
      <h2 className="text-base font-semibold text-center sm:text-xl">{name}</h2>
      <p className="text-sm text-center sm:text-base">{title}</p>
      <div className="flex gap-3 mx-auto md:flex-col md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 md:mx-0 md:text-rose-600">
        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100017192357822&sk"
        >
          <FacebookRoundedIcon className="text-xl cursor-pointer hover:text-rose-600 md:hover:text-gray-500" />
        </Link>
        <Link target="_blank" href="https://github.com/NaseemKhan005">
          <GitHubIcon className="text-xl cursor-pointer hover:text-rose-600 md:hover:text-gray-500" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/naseem-khan-275275258/"
        >
          <LinkedInIcon className="text-xl cursor-pointer hover:text-rose-600 md:hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container px-5 mx-auto md:px-16 lg:px-24">
      <span className="text-center service-name ">OUR TEAM</span>
      <h2 className="mx-auto text-center title md:w-1/2">
        Driven By Teamwork
      </h2>

      <div className="grid grid-cols-2 mx-auto mt-16 lg:grid-cols-3 gap-y-8 sm:gap-8">
        <TeamCard
          imgSrc={"/team/1.png"}
          name="Shivam Goyal"
          title="CEO and Founder"
        />
        <TeamCard imgSrc={"/team/2.png"} name="Satyam Goyal" title="Founder" />
        <TeamCard
          imgSrc={"/team/3.png"}
          name="Aaron Nunez"
          title="Web Designer"
        />
        <TeamCard
          imgSrc={"/team/4.png"}
          name="Lina Jutila"
          title="Web Developer"
        />
        <TeamCard
          imgSrc={"/team/5.png"}
          name="Saimon Harmer"
          title="CEO and Founder"
        />
        <TeamCard
          imgSrc={"/team/6.png"}
          name="Aaron Nunez"
          title="Web Designer"
        />
      </div>
    </section>
  );
};

export default Team;
