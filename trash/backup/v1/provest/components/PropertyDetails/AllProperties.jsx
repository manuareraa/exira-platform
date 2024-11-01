import Link from "next/link";
import propertiesData from "../../data/propertiesData";
import ProductCard from "../cards/ProductCard";

const AllProperties = () => {
  return (
    <section className="properties__grid section__space wow fadeInUp">
      <div className="container">
        <div className="properties__grid__area">
          <div className="title__with__cta">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8">
                <h2>Browse Similar Properties</h2>
              </div>
              <div className="col-lg-4">
                <div className="text-start text-lg-end">
                  <Link
                    href="/property"
                    className="button button--secondary button--effect"
                  >
                    Browse All Properties
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="property__grid__wrapper">
            <div className="row alt__loan__row">
              {propertiesData.slice(0, 3).map((singleItem) => (
                <div key={singleItem.id} className="col-lg-6 col-xl-4">
                  <ProductCard singleItem={singleItem} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProperties;
