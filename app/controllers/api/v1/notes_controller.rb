module API
  module V1
    class NotesController
      before_action :set_note, only: %i[create delete]
      respond_to :json

      def index
        respond_with(Task.all)
      end

      def create
        @task = Task.create(params)
      end

      def update
        @task.update_attributes(params.permit(:title, :body))
      end

      def delete
        @task.delete
      end

      private

      def set_note
        @task = Task.find(params[:id])
      end
    end
  end
end
