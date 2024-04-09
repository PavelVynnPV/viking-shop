import React from "react";
import styles from "../styles/ItemInfo.module.css";

function SizeComp({ size, setSize, index }) {
  return (
    <>
      <div className={styles.btn_size}>
        <label key={size}>
          <input
            className={styles.unActive}
            type="radio"
            name="name2"
            value={size}
            defaultChecked={size ? index === 0 : null}
            onClick={() => setSize(size)}
          />
          <span className={styles.active_size_btn}>{size}</span>
        </label>
      </div>
    </>
  );
}

export default SizeComp;
