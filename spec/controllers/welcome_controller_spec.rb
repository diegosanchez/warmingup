require 'rails_helper'

RSpec.describe WelcomeController, :type => :controller do
  describe "index" do
    it "should responde home page" do
      get :index
      expect(response).to render_template("index")
    end
  end

end
