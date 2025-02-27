import "./BurgerBtn.scss";

const BurgerBtn = () => {
    function toggleBurger14() {
        document
            .querySelector(".burger-14")
            .classList.toggle("burger-14--active");
        document
            .querySelector(".burger-14__center-line")
            .classList.toggle("burger-14__center-line--active");

        // Menu

        document.querySelector(".menu").classList.toggle("menu--active");

        document.body.classList.toggle("body--hidden");

        document.querySelectorAll(".menu__link").forEach((link, index) => {
            setTimeout(() => {
                link.classList.toggle("menu__link--active");
            }, 100 * index);
        });

        document.querySelectorAll(".text-line-opac").forEach((link, index) => {
            setTimeout(() => {
                link.classList.toggle("text-line-opac--active");
            }, 100 * index);
        });
    }

    return (
        <>
            <div onClick={toggleBurger14} className="burger-14">
                <span className="burger-14__center-line"></span>
            </div>
        </>
    );
};

export default BurgerBtn;
