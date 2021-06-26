SELECT [carnet],
        [nombre_est],
        [primer_apellido_est],
        [segundo_apellido_est]
        

  FROM [dbo].[vista_amigos]

  WHERE [carnet_amigo]=@carnet_amigo and [estado]='pendiente'
