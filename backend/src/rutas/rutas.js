const express = require('express');
const Cliente = require('../modelo/cliente');
const router = express.Router();



router.get('/', async (req, res) =>{
    const clientes = await Cliente.find();
    console.log(clientes);
    res.json({
        clientes: clientes
    });
});

router.get('/:id', async (req, res) => {
    const cliente = await Cliente.findById(req.params.id);
    res.json({
        cliente: cliente
    })
});

router.post('/', async (req, res) => {
    //capturo los datos del front
    const {nombre, edad, telefono, empresa, rol} = req.body;
    const cliente = new Cliente({
        nombre: nombre,
        edad: edad,
        telefono: telefono,
        empresa: empresa,
        rol: rol
    });
    await cliente.save();
    res.json({
        status: 'Cliente guardado'
    });
});

router.put('/:id', async (req, res) => {
    const {nombre, edad, telefono, empresa} = req.body;
    const clientenuevo = {
        nombre: nombre,
        edad: edad,
        telefono: telefono,
        empresa: empresa
    }
    await Cliente.findByIdAndUpdate(req.params.id, clientenuevo, {useFindAndModify: false});
    res.json({
        status: "Cliente Actualizado"
    })
})

router.delete('/:id', async (req, res) => {
    await Cliente.findByIdAndDelete(req.params.id, {useFindAndModify: false});
    res.json({
        status: "Cliente Elimando"
    })

})

module.exports = router;