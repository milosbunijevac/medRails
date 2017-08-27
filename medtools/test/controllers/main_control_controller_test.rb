require 'test_helper'

class MainControlControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get main_control_index_url
    assert_response :success
  end

end
