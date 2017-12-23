module Api
  module V1
    class NotesController < ActionController::Base
      before_action :set_note, only: %i[update destroy]

      def index
        render json: Note.all
      end

      def create
        @note = Note.create(params.permit(:title, :body))
      end

      def update
        @note.update_attributes(params.permit(:id, :title, :body))
      end

      def destroy
        @note.delete
      end

      private

      def set_note
        params.require(:id)
        @note = Note.find(params[:id])
      end
    end
  end
end
