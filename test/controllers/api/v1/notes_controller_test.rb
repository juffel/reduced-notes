require 'test_helper'

module Api
  module V1
    class NotesControllerTest < ActionDispatch::IntegrationTest
      test 'index' do
        get api_v1_notes_path
        assert_response :success
        json_response = (JSON.parse response.body).first

        note = Note.first
        assert_equal note.id,    json_response['id']
        assert_equal note.title, json_response['title']
        assert_equal note.body,  json_response['body']
      end

      test 'create' do
        note_params = { title: 'new note', body: 'what a beautiful note' }
        post api_v1_notes_path, params: note_params

        new_note = Note.where(title: 'new note', body: 'what a beautiful note')
        assert new_note.present?
      end

      test 'update' do
        note_params = { title: 'updated note', body: 'what an updated note' }
        patch api_v1_note_path(Note.first.id), params: note_params

        updated_note = Note.first
        assert_equal 'updated note', updated_note.title
        assert_equal 'what an updated note', updated_note.body
      end

      test 'delete' do
        delete api_v1_note_path(Note.first.id)

        assert_equal 0, Note.count
      end
    end
  end
end
