const e = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // let list = discussionsData
    // if(req.params.id === undefined){
    //   return res.status(404).end()
    // }
    // else if(req.params.id !== undefined){
    //   list = list.find((el) =>{
    //     return Number(req.params.id) === el.id
    //   })
    //   return res.status(200).json(list);
    // }
    const list = discussionsData.find((el) => el.id === Number(req.params.id))
    if (list) {
      return res.status(200).json(list);
    } else {
      return res.status(404).json();
    }
    
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.

  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.

  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.

  },
};

module.exports = {
  discussionsController,
};
