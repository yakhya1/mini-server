module.exports.brandController = {
    getBrand: (req, res) => {
      res.send('brand успешно добавлен')
    },
  
    createBrand: (req, res) => {
      res.send("brand успешно создан")
    },

    deleteBrand(req, res){
        res.send(`brand${req.params.id} успешно удален`)
    }
  };