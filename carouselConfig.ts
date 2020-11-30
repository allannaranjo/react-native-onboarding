export interface ICarouselDataItem {
  url : string;
  title: string;
  description: string;
  id: number;
  options : [{
    type : string;
    text : string;
  }]
}

export const carouselConfiguration = [{
  title: 'Title',
  url: require('IMAGE_PATH_TO_ASSETS'),
  description: "¡description!",
  id: 1
},
{
  title: 'Step 1',
  url: require('IMAGE_PATH_TO_ASSETS'),
  description: "description",
  id: 2
},
{
  title: 'Step 2',
  url: require('IMAGE_PATH_TO_ASSETS'),
  description: "description",
  id: 3
},{
  title: 'Step 3',
  url: require('IMAGE_PATH_TO_ASSETS'),
  description: "description",
  id: 4
},{
  title: 'Step 4',
  url: require('IMAGE_PATH_TO_ASSETS'),
  description: "description",
  id: 5,
  options: [{
    type : "button",
    text : 'Create your account!',
    target : 'RegisterScreen'
  }]
}]
