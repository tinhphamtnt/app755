{
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer')
  },
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json', 'wasm', 'svg'],
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg']
  }
}