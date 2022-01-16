type FeatureFlags = {
  darkMode: () => void;
  newRegistrationFlow: () => void;
};

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

/**
 * @name MappedType
 * @description A generic type used when don't want to
 * repeat ourselves and final type is based on other type.
 */
const features: FeatureOptions = {
  darkMode: true,
  newRegistrationFlow: false,
};
