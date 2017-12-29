module Api
  module V1
    class NotesController < ActionController::Base
      before_action :set_note, only: %i[update destroy]

      def index
        render json: Note.all.order(created_at: :desc)
      end

      def create
        @note = Note.create(params.permit(:title, :body))
        render json: @note
      end

      def update
        @note.update_attributes(params.permit(:id, :title, :body))
        render json: @note
      end

      def destroy
        @note.delete
        render json: {}
      end

      private

      def set_note
        params.require(:id)
        @note = Note.find(params[:id])
      end
    end
  end
end
