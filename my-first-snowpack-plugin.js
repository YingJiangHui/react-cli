module.exports = function(snowpackConfig,pluginOptions){
  return {
    name:'my-first-snowpack-plugin',
    config(a){
      // console.log("Success")
      // console.log(a)
    },
    load(e){
      console.log('e')
      console.log(e)
    },
    resolve:{
      input: ['.tsx'],
      output:['.js']
    }
  }
}