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
