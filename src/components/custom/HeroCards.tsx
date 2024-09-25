import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { PinContainer } from "../aceternity/3DPin";

function HeroCards() {
  const cardData = [
    {
      sharesAvailable: "347,250",
      properties: "435",
      startingFrom: "$35",
      city: "New York, United States",
      location: "United States",
    },
    {
      sharesAvailable: "236,864",
      properties: "289",
      startingFrom: "$30",
      city: "Mumbai, India",
      location: "India",
    },
    {
      sharesAvailable: "410,488",
      properties: "239",
      startingFrom: "$40",
      city: "London, United Kingdom",
      location: "United Kingdom",
    },
  ];

  return (
    <div className="flex flex-col max-w-full md:flex-row md:gap-x-3 gap-y-8">
      {cardData.map((card, index) => (
        <PinContainer title={card.city} href="#">
          <div
            key={index}
            className="flex flex-col items-start w-full p-10 text-left rounded-2xl bg-gamma gap-y-6 md:w-[18rem] crypto-shadow"
          >
            {/* Shares Available */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={faArrowTrendUp} />
                <p className="text-2xl md:text-4xl">{card.sharesAvailable}</p>
              </div>
              <p className="text-base md:text-lg">Shares Available</p>
            </div>

            {/* Properties */}
            <div className="flex flex-col items-start">
              <p className="text-5xl font-bold md:text-7xl">
                {card.properties}
              </p>
              <p className="text-base md:text-lg">Assets Tokenized</p>
            </div>

            {/* Bottom Container */}
            <div className="w-full">
              <p className="text-lg md:text-2xl">
                Starting from{" "}
                <span className="font-bold">{card.startingFrom}</span>
              </p>
              <div className="h-[1px] bg-black/10 my-2"></div>
              {/* Location */}
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="text-base md:text-lg">{card.location}</p>
              </div>
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}

export default HeroCards;
