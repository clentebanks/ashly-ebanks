// Aquí puedes agregar interactividad si quieres
// Por ejemplo, abrir imágenes en un modal al hacer clic
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', event => {
      const imgSrc = event.target.src;
      // Crear modal dinámicamente para mostrar la imagen
      const modalHTML = `
          <div class="modal fade" id="imageModal" tabindex="-1">
              <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                      </div>
                      <div class="modal-body">
                          <img src="${imgSrc}" class="img-fluid" alt="Selected Image">
                      </div>
                  </div>
              </div>
          </div>`;
      document.body.insertAdjacentHTML('beforeend', modalHTML);
      const modal = new bootstrap.Modal(document.getElementById('imageModal'));
      modal.show();

      // Eliminar el modal al cerrar
      document.getElementById('imageModal').addEventListener('hidden.bs.modal', function () {
          document.getElementById('imageModal').remove();
      });
  });
});
