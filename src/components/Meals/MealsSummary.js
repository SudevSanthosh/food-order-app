import React from "react";
import classes from './MealsSummary.module.css'
const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivered</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at odio
        ultrices, facilisis quam ac, commodo mauris. Maecenas vel vehicula urna.
        Sed eget maximus nisl.
      </p>
      <p>
        Nam vitae neque bibendum, condimentum erat et, luctus metus.
        Pellentesque porta, sem quis tempus lobortis, leo sapien dapibus eros,
        vel lobortis lacus tortor eget lorem.
      </p>
    </section>
  );
};

export default MealsSummary;
