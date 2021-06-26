SELECT [carnet_amigo],
        [nombre_est],
        [primer_apellido_est],
        [segundo_apellido_est]
        

  FROM [dbo].[vista_amigos]

  WHERE [carnet]=@carnet and [estado]='amigos'


