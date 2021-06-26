INSERT INTO [dbo].[amigos]
    (
        [carnet],
        [carnet_amigo],
        [nombre_amigo],
        [apellido1_amigo],
        [apellido2_amigo],
        [estado]

    )
VALUES 
    (
        @carnet,
        @carnet_amigo,
        @nombre_amigo,
        @apellido1_amigo,
        @apellido2_amigo,
        @estado
    )
