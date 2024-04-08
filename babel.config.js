module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
  // env: {
  //   production: {
  //     // plugins: ['react-native-paper/babel'],
  //     plugins: [
  //       [
  //         'module-resolver',
  //         {
  //           root: ['.'],
  //           extensions: [
  //             '.ios.ts',
  //             '.android.ts',
  //             '.ts',
  //             '.ios.tsx',
  //             '.android.tsx',
  //             '.tsx',
  //             '.jsx',
  //             '.js',
  //             '.json',
  //           ],
  //           alias: {
  //             src: './src',
  //             components: './src/components',
  //             constants: './src/constants',
  //             helpers: './src/helpers',
  //             i18n: './src/i18n',
  //             reducer: './src/reducer',
  //             screens: './src/screens',
  //             tests: './src/tests',
  //           },
  //         },
  //       ],
  //       ['react-native-paper/babel'],
  //     ],
  //   },
  // },
};
