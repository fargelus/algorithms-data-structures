class Node
  attr_accessor :value, :left, :right

  def initialize(inner = {})
    @value = inner[:value]
    @left = inner[:left]
    @right = inner[:right]
  end
end
