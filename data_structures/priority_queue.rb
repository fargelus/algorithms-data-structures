PriorityQueueItem = Struct.new(:value, :priority) do
  def to_s
    value.to_s
  end
end

class PriorityQueue
  def initialize
    @store = []
  end

  def pop
    item_index = @store.index(top)
    @store.delete_at(item_index)
  end

  def top
    @store.max_by { |qi| qi.priority }
  end

  def push(value, priority)
    unless priority.is_a? Integer
      raise ArgumentError.new 'Specified priority must be numeric'
    end

    @store << PriorityQueueItem.new(value, priority)
  end

  def to_s
    @store.map(&:to_s).to_s
  end
end

pq = PriorityQueue.new
pq.push('a', 1)
pq.push('b', 2)
puts pq # a, b
puts pq.pop # 'b'
puts pq # 'a'
