import styles from "./LoadingData.module.scss";
import logo from "/logo/mountain-white.png";

const LoadingData = () => {
	return (
		<>
			<div className={styles["loading-data"]}>
				<div className={styles["cube"]}>
					<div className={styles["cube-top"]}></div>
					<div className={styles["cube-right"]}></div>
					<div className={styles["cube-bottom"]}></div>
					<div className={styles["cube-left"]}></div>
					<div className={styles["cube-logo-container"]}>
						<img className={styles["cube-logo"]} src={logo} alt="" />
						<p>Neresen</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoadingData;
