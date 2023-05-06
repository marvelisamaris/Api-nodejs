describe('POST /api/users', () => {
    test('Debería crear un nuevo usuario', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          nombresUsuario: 'Juan David',
          celularUsuario: 3188322674
        });
      expect(res.statusCode).toEqual(200);
      expect(res.body.nombresUsuario).toEqual('Juan David');
      expect(res.body.celularUsuario).toEqual(3188322674);
    });
    test('Debería dar error si falta algún campo requerido', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          nombresUsuario: 'Juan David'
        });
      expect(res.statusCode).toEqual(400);
    });
  });