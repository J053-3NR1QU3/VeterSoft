$(document).on('click', '.actualizarCliente', function () {
    $('#IDcliente').val($(this).data('idcliente'));
    $('#Nombre').val($(this).data('nombre'));
    $('#Apellido').val($(this).data('apellido'));
    $('#Telefono').val($(this).data('telefono'));
    $('#Direccion').val($(this).data('direccion'));
});

$(document).on('click', '.mostrarCliente', function () {
    $('#NombreM').val($(this).data('nombre'));
    $('#ApellidoM').val($(this).data('apellido'));
    $('#TelefonoM').val($(this).data('telefono'));
    $('#DireccionM').val($(this).data('direccion'));
});

$(document).on('click', '.eliminarCliente', function () {
    $('#IDclienteE').val($(this).data('idcliente'));
});

$(document).on('click', '.actualizarUsuario', function () {
    $('#IDusuario').val($(this).data('idusuario'));
    $('#nombre').val($(this).data('nombre'));
    $('#password').val($(this).data('password'));
});

$(document).on('click', '.eliminarUsuario', function () {
    $('#IDusuarioE').val($(this).data('idusuario'));
});

$(document).on('click', '.mostrarUsuario', function () {
    $('#nombreM').val($(this).data('nombre'));
    $('#passwordM').val($(this).data('password'));
});

$(document).on('click', '.actualizarMascota', function () {
    $('#IDmascota').val($(this).data('idmascota'));
    $('#Nombre').val($(this).data('nombre'));
    $('#Especie').val($(this).data('especie'));
    $('#Peso').val($(this).data('peso'));
    $('#Raza').val($(this).data('raza'));
    $('#Sexo').val($(this).data('sexo'));
    $('#Edad').val($(this).data('edad'));
    $('#IDcliente').val($(this).data('idcliente'));
});

$(document).on('click', '.mostrarMascota', function () {
    $('#NombreM').val($(this).data('nombre'));
    $('#EspecieM').val($(this).data('especie'));
    $('#PesoM').val($(this).data('peso'));
    $('#RazaM').val($(this).data('raza'));
    $('#SexoM').val($(this).data('sexo'));
    $('#EdadM').val($(this).data('edad'));
    $('#IDclienteM').val($(this).data('idcliente'));
});

$(document).on('click', '.eliminarMascota', function () {
    $('#IDmascotaE').val($(this).data('idmascota'));
});

$(document).on('click', '.mostrarProveedor', function () {
    $('#NombreM').val($(this).data('nombre'));
    $('#ApellidoM').val($(this).data('apellido'));
    $('#TelefonoM').val($(this).data('telefono'));
    $('#DireccionM').val($(this).data('direccion'));
});

$(document).on('click', '.actualizarProveedor', function () {
    $('#IDproveedor').val($(this).data('idproveedor'));
    $('#Nombre').val($(this).data('nombre'));
    $('#Apellido').val($(this).data('apellido'));
    $('#Telefono').val($(this).data('telefono'));
    $('#Direccion').val($(this).data('direccion'));
});

$(document).on('click', '.eliminarProveedor', function () {
    $('#IDproveedorE').val($(this).data('idproveedor'));
});

$(document).on('click', '.mostrarMedicamento', function () {
    $('#NombreM').val($(this).data('nombre'));
    $('#PresentacionM').val($(this).data('presentacion'));
    $('#ContenidoNetoM').val($(this).data('contenidoneto'));
    $('#PrecioCompraM').val($(this).data('preciocompra'));
    $('#PrecioVentaM').val($(this).data('precioventa'));
    $('#ExistenciaM').val($(this).data('existencia'));
});

$(document).on('click', '.actualizarMedicamento', function () {
    $('#IDmedicamento').val($(this).data('idmedicamento'));
    $('#Nombre').val($(this).data('nombre'));
    $('#PresentacionM').val($(this).data('presentacion'));
    $('#ContenidoNetoM').val($(this).data('contenidoneto'));
    $('#PrecioCompraM').val($(this).data('preciocompra'));
    $('#PrecioVentaM').val($(this).data('precioventa'));
    $('#ExistenciaM').val($(this).data('existencia'));
});

$(document).on('click', '.eliminarMedicamento', function () {
    $('#IDmedicamentoE').val($(this).data('idmedicamento'));
});

$(document).on('click', '.mostrarMaterial', function () {
    $('#NombreM').val($(this).data('nombre'));
    $('#PresentacionM').val($(this).data('presentacion'));
    $('#ContenidoNetoM').val($(this).data('contenido'));
    $('#PrecioCompraM').val($(this).data('precio'));
    $('#ExistenciaM').val($(this).data('existencia'));
    $('#IDproveedorM').val($(this).data('idproveedor'));
});

$(document).on('click', '.actualizarMaterial', function () {
    $('#IDmaterial').val($(this).data('idmaterial'));
    $('#Nombre').val($(this).data('nombre'));
    $('#Presentacion').val($(this).data('presentacion'));
    $('#ContenidoNeto').val($(this).data('contenido'));
    $('#PrecioCompra').val($(this).data('precio'));
    $('#Existencia').val($(this).data('existencia'));
    $('#IDproveedor').val($(this).data('idproveedor'));
});

$(document).on('click', '.eliminarMaterial', function () {
    $('#IDmaterialE').val($(this).data('idmaterial'));
});

$(document).on('click', '.actualizarHistorial', function () {
    $('#IDhistorial').val($(this).data('idhistorial'));
    $('#Vacunaciones').val($(this).data('vacunaciones'));
    $('#Temperatura').val($(this).data('temperatura'));
    $('#FechaI').val($(this).data('fechaI'));
    $('#FechaM').val($(this).data('fechaM'));
    $('#FrecuenciaC').val($(this).data('frecuenciaC'));
    $('#FrecuenciaR').val($(this).data('frecuenciaR'));
    $('#IDmascota').val($(this).data('idmascota'));
});