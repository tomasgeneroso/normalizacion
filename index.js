const { schema,normalize,denormalize } = require("normalizr")
const logger=require('./util/objetPrinter.js')
negocioA={
    id:"100",
    nombre:"negocioA",
    hogar:
      {
        index: "6",
        stock: "4482",
        nombre: "Bullock Eaton",
        company: "DRAGBOT",
        details: "In voluptate laborum est ullamco pariatur. Proident eu eiusmod irure deserunt pariatur excepteur minim. Incididunt in quis duis nisi cillum anim laboris culpa proident. Laborum proident qui eiusmod velit eu qui laboris ullamco occaecat. Sunt culpa et ut duis tempor sunt proident et occaecat occaecat fugiat adipisicing.\r\n",
        registered: "2016-09-22T07:26:00 +03:00",
        price: "375.8942"
      },
      
    outdoor:
      {
        index: "10",
        stock: "45719",
        nombre: "Samantha Floyd",
        company: "RETROTEX",
        details: "Amet do occaecat minim ipsum commodo commodo quis excepteur. Pariatur consectetur anim sint fugiat ad irure sunt fugiat minim occaecat. Voluptate elit sint culpa minim reprehenderit consequat dolore duis.\r\n",
        registered: "2019-09-12T05:11:51 +03:00",
        price: "669.7029"
      },
    productos:[
      {
        index: "10",
        stock: "45719",
        nombre: "Samantha Floyd",
        company: "RETROTEX",
        details: "Amet do occaecat minim ipsum commodo commodo quis excepteur. Pariatur consectetur anim sint fugiat ad irure sunt fugiat minim occaecat. Voluptate elit sint culpa minim reprehenderit consequat dolore duis.\r\n",
        registered: "2019-09-12T05:11:51 +03:00",
        price: "669.7029"
      },
      {
        index: "2",
        stock: "93523",
        nombre: "Manning Ayala",
        company: "APEX",
        details: "Aliquip nostrud irure aute magna aliqua duis duis mollit. Nisi officia quis consectetur laborum enim exercitation. Magna magna ipsum irure amet aliqua minim qui pariatur. Consequat cupidatat ut laboris do est aute reprehenderit elit elit do ea cupidatat deserunt. Mollit non duis nisi eu officia velit ipsum qui fugiat.\r\n",
        registered: "2020-06-22T05:46:03 +03:00",
        price: "796.3501"
      },
      {
        index: "7",
        stock: "34405",
        nombre: "Hess Campbell",
        company: "MOBILDATA",
        details: "Mollit ea consectetur sit eu. Elit minim enim nostrud adipisicing. Proident duis sint veniam veniam. Voluptate sit aute reprehenderit exercitation qui sunt labore aliqua in laborum cillum eiusmod consequat.\r\n",
        registered: "2014-04-06T12:30:12 +03:00",
        price: "451.0411"
      },
      {
        index: "9",
        stock: "16758",
        nombre: "Nina Joyner",
        company: "FANGOLD",
        details: "Nulla magna commodo do aliqua. Nisi dolor adipisicing incididunt veniam nisi amet deserunt sunt anim pariatur nisi. Duis nostrud exercitation minim officia veniam consequat reprehenderit ea dolor anim minim irure pariatur. Ullamco id aliqua incididunt adipisicing occaecat aute consectetur sit dolore ipsum consequat quis voluptate reprehenderit. Aute excepteur nisi cupidatat ex qui amet esse sit reprehenderit. Sint aliqua fugiat officia laboris pariatur fugiat eu aliqua.\r\n",
        registered: "2022-02-18T07:29:55 +03:00",
        price: "873.7866"
      },
      {
        index: "5",
        stock: "84259",
        nombre: "Rosario Lindsey",
        company: "STOCKPOST",
        details: "Culpa id non pariatur ad aliqua mollit. Eu duis deserunt occaecat ipsum tempor consequat anim consequat eiusmod cillum culpa nulla. Velit deserunt et irure id veniam exercitation. Sunt id ut culpa culpa non est dolor mollit aliqua in mollit in officia ullamco.\r\n",
        registered: "2015-07-26T08:29:58 +03:00",
        price: "416.1705"
      },
      {
        index: "6",
        stock: "78723",
        nombre: "Casey Meyer",
        company: "INTERGEEK",
        details: "Velit amet mollit mollit nulla adipisicing nostrud et. Consequat velit amet pariatur sunt consequat amet exercitation nisi. Exercitation minim sint cillum dolore in sit deserunt laboris officia commodo anim ea elit.\r\n",
        registered: "2014-07-12T07:22:23 +03:00",
        price: "884.9546"
      },
      {
        index: "3",
        stock: "51531",
        nombre: "Jolene Mills",
        company: "EXOSTREAM",
        details: "Tempor nostrud tempor sunt aliqua esse irure irure tempor anim. Cillum cupidatat eu proident consequat eu deserunt elit eu ipsum. Velit sunt anim sint aute laborum.\r\n",
        registered: "2016-04-11T02:04:55 +03:00",
        price: "854.0811"
      },{
        index: "6",
        stock: "4482",
        nombre: "Bullock Eaton",
        company: "DRAGBOT",
        details: "In voluptate laborum est ullamco pariatur. Proident eu eiusmod irure deserunt pariatur excepteur minim. Incididunt in quis duis nisi cillum anim laboris culpa proident. Laborum proident qui eiusmod velit eu qui laboris ullamco occaecat. Sunt culpa et ut duis tempor sunt proident et occaecat occaecat fugiat adipisicing.\r\n",
        registered: "2016-09-22T07:26:00 +03:00",
        price: "375.8942"
      },
      {
        index: "6",
        stock: "82193",
        nombre: "Coffey Delacruz",
        company: "LIMOZEN",
        details: "Nulla veniam voluptate consectetur eiusmod magna proident occaecat sint deserunt cillum magna proident officia quis. Enim ullamco est ipsum nulla culpa et nulla enim incididunt Lorem. Eu eu tempor nulla nostrud adipisicing nostrud cillum laboris consectetur est. Adipisicing sit irure tempor quis fugiat.\r\n",
        registered: "2019-12-28T01:01:57 +03:00",
        price: "147.2041"
      },
      {
        index: "5",
        stock: "44537",
        nombre: "Terrie Nelson",
        company: "PEARLESSA",
        details: "Proident Lorem enim consectetur dolore sunt elit Lorem nulla amet. Proident consequat sunt veniam voluptate elit enim. Esse amet quis irure exercitation ullamco amet mollit consequat. Sunt dolore esse dolor culpa ut nulla eiusmod ad non ullamco magna occaecat laborum.\r\n",
        registered: "2021-04-27T10:02:37 +03:00",
        price: "592.9708"
      }
    ]
  }
  const catproductos=new schema.Entity('productos')
  const prodgeneral=new schema.Entity('prodgeneral',{
      hogar:catproductos,
    outdoor:catproductos,
    catproductos:[catproductos]
  })
  //NORMALIZACION
  let normalizada=normalize(negocioA,prodgeneral)
  //logger(normalizada)
  console.log('comun--->',JSON.stringify(negocioA).length)
  console.log('normalizada--->',JSON.stringify(normalizada).length)
  
  //DENORMALIZACION
  let denormalizada=denormalize(normalizada.result,prodgeneral,normalizada.entities)
 
  console.log('denormalizada-->',JSON.stringify(denormalizada).length)
  logger(normalizada)
  
