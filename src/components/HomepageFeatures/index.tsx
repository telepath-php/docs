import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    image: require('@site/static/img/easy-to-use.png').default,
    description: (
      <>
        Telepath was designed from the ground up to get you up and running in no time by reducing setup time and being as self-explanatory as possible.
      </>
    ),
  },
  {
    title: 'Focus on Your Bot',
    image: require('@site/static/img/focus-on-your-bot.png').default,
    description: (
      <>
        Telepath lets you focus on your Bot. You can fully discover your options by browsing your IDE's autocomplete features.
      </>
    ),
  },
  {
    title: 'Powered by Modern PHP',
    image: require('@site/static/img/modern-php.png').default,
    description: (
      <>
        Telepath is built on top of modern PHP and utilizes the latest features of the language to give you the best experience possible.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
