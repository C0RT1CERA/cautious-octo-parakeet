import Image from "next/image";
import { FaEllipsis, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Section1 = () => {
  const Tags = [
    {
      id: 0,
      name: "Work",
    },
    {
      id: 1,
      name: "Art",
    },
    {
      id: 2,
      name: "Painting",
    },
    {
      id: 3,
      name: "Kids",
    },
    {
      id: 4,
      name: "Nature",
    },
  ];
  
  const SideData = [
    {
      id:0,
      data: "Elizabeth Goodspeed on our current obsession with food in advertising and fashion",
    },
    {
      id:1,
      data: "Stay proactive and start using that power you have",
    },
    {
      id:2,
      data: "Demand the changes we need” – Art to the Polls enlists creatives’ help to get young people voting",
    },
    {
      id:3,
      data: "If the role isn’t what you signed up for, you should take a step back and check that this is what you want.",
    },
    {
      id:4,
      data: "What you can learn from the world’s first and longest-running branding program",
    },
  ]

  return (
    <div className=" pt-5 flex flex-col border-4 border-black">
    <div className="mt-[130px] flex px-5 py-3  ">
      <div className="flex flex-col w-3/4 px-5">
        <div className="flex flex-col">
          <h2 className="text-lg md:text-3xl lg:text-5xl font-bold">
            Ian Archie Beck’s peaceful paintings illuminate the “simple beauty” of British suburbia
          </h2>
          <p className="sm:text-sm md:text-lg lg:text-xl pt-5">
            After spending many years conjuring imaginary scenes for children’s books, the artist has now turned to more quotidian subject matter.
          </p>
        </div>

        <div className="flex flex-row w-full pt-[40px]">
          <div className="flex flex-col w-[500px]">
            <p>
              <span>Words</span> Revmedsync
            </p>
            <p>___</p>
            <p>11 July 2024</p>
            <div className="flex flex-row justify-start gap-5 pt-[30px] pl-[10px]">
              <FaLinkedin size={20} />
              <FaInstagram size={20} />
              <FaTwitter size={20} />
              <FaEllipsis size={20} className="text-gray-500" />
            </div>
          </div>

          <div className="flex flex-row w-full">
            <div className="grid grid-cols-3  gap-2 pt-[50px] overflow-hidden">
              {Tags.map((tag) => (
                <p key={tag.id} className="w-auto  overflow-hidden">
                  <span className="text-[5px] bg-y3  font-normal p-1 text-y1  md:text-sm border border-stone-200 block text-center overflow-hidden text-ellipsis whitespace-nowrap">
                    {tag.name}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Div */}
      <div className="pr-[130px]">
        <Image
          src="/img/Strata.jpg"
          alt="some art"
          width={700}
          height={700}
          className="object-cover object-center"
        />
      </div>
    </div>

    <div className="flex px-10">
        <div className="pr-32">
          <p className="font-extralight p-5">
            Creative Career Conundrums is a weekly advice column from If You Could Jobs. Each week their selected panel of professionals from the creative industry answers your burning career questions to help you navigate the creative journey.
          </p>
          <p className="font-bold p-5">
          This week’s question:
            <span className="font-normal p-5">
              

              How do you transition, as a graphic designer, from an advertising/marketing agency to a creative studio? For those who have made that transition, was the change worth it?

              I’ve been on the fence about making this career transition, but I know for certain that working in a creative agency is something I would want to try. I find that my portfolio is lacking projects that would help me get into that kind of industry. What are some things recruiters/creative agencies look for when it comes to an applicant’s portfolio?
              
            </span>
          </p>
          <p className="font-semibold p-5">Katie Cadwell, co-founder of branding studio Lucky Dip and The NDA Podcast:
            <span className="font-normal p-5">
              

What an exciting move — it’s absolutely something you can do. I love the idea that careers are made up of chapters. And we’re fortunate that creativity is one of the most transferable skills there is. To break down your question into a few points…
            </span>
          </p>
        </div>
        <div className="pr-32 w-full">
          <div className="">
            <h3 className="font-bold">The Latest</h3>
            <div className="flex flex-row  justify-between py-5 items-end">
            <p className="text-xs font-extralight">
            View more from
            </p>
              
            <p className="font-light text-sm pl-2">
              Creative Industry
            </p>
            </div>
            
          </div>
          {SideData.map((item) => (
            <div key={item.id} className="flex flex-col bg-wit1 hover:bg-c5 p-2 border border-blk1">
              <p className="text-sm text-blk1 hover:text-c2">{item.data}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
