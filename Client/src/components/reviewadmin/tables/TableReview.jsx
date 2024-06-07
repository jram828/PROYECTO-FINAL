

const TableReview = ({ review, functionUnlock, functionDelete, variantSuccess = "btn-success", variantDanger = "btn-error" }) => {


  return (
    <>
      {review.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>ID usuario</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Comentario</th>
                <th>Puntuación</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {review.map(rev => (
                <tr key={rev.id}>
                  <td>{rev.user.id}</td>
                  <td>{rev.user.name}</td>
                  <td>{rev.user.email}</td>
                  <td>{rev.comment}</td>
                  <td>{rev.ranking}</td>
                  {/* BOTONES */}
                  <td>
                    <button className={`btn ${variantSuccess}`} onClick={() => functionUnlock(rev.id)}>
                      {/* <SpeakerNotesOff /> */}
                    </button>
                  </td>
                  {/* BOTONES */}
                  <td>
                    <button className={`btn ${variantDanger}`} onClick={() => functionDelete(rev.id)}>
                      {/* <DeleteForever /> */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h3>No hay comentarios</h3>
      )}
    </>
  );
};

export default TableReview;
